import sqlite3
import shutil
import os
from urllib.parse import urlparse, parse_qs, unquote_plus
from datetime import datetime, timedelta

history_path = os.path.expandvars(
    r"%LOCALAPPDATA%\BraveSoftware\Brave-Browser\User Data\Default\History"
)

# Copiamos a BD para não mexer diretamente no histórico do Brave
copy_path = "brave_history_copy.db"
shutil.copy2(history_path, copy_path)

conn = sqlite3.connect(copy_path)
cursor = conn.cursor()

cursor.execute("""
    SELECT url, last_visit_time
    FROM urls
    ORDER BY last_visit_time DESC
""")

def brave_time_to_datetime(value):
    # Chromium conta microssegundos desde 1601-01-01
    return datetime(1601, 1, 1) + timedelta(microseconds=value)

def get_search(url):
    parsed = urlparse(url)
    host = parsed.netloc.lower()
    params = parse_qs(parsed.query)

    # Google
    if "google." in host and "q" in params:
        return params["q"][0]

    # Brave Search
    if host == "search.brave.com" and "q" in params:
        return params["q"][0]

    # Bing
    if "bing.com" in host and "q" in params:
        return params["q"][0]

    # DuckDuckGo
    if "duckduckgo.com" in host and "q" in params:
        return params["q"][0]

    return None


results = []

for url, timestamp in cursor.fetchall():
    search = get_search(url)

    if search:
        date = brave_time_to_datetime(timestamp)
        results.append((date, unquote_plus(search)))

conn.close()

for date, search in results:
    print(f"{date:%Y-%m-%d %H:%M}  |  {search}")