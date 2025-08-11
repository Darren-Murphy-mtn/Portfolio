import os
import subprocess
import threading
import time
import atexit
import streamlit as st
from streamlit.components.v1 import html

NEXT_DIR = os.path.dirname(__file__)
PORT = 3000


def start_next_server():
    """Start `npm run dev` in a separate thread / subprocess."""
    env = os.environ.copy()
    # Ensure NODE_ENV is development for better DX
    env.setdefault("NODE_ENV", "development")
    return subprocess.Popen([
        "npm",
        "run",
        "dev",
        "--",
        "--port",
        str(PORT)
    ], cwd=NEXT_DIR, stdout=subprocess.PIPE, stderr=subprocess.PIPE, env=env)


# Run once per Streamlit session
if "next_proc" not in st.session_state:
    st.info("Starting Next.js dev server… (first load may take ~10 s)")
    proc = start_next_server()
    st.session_state.next_proc = proc
    # Wait a moment for compilation
    time.sleep(8)


st.set_page_config(page_title="Portfolio Preview", layout="wide")
st.title("Portfolio Website — Live Preview")

# Embed site via iframe
html(
    f"<iframe src=\"http://localhost:{PORT}\" style='width:100%; height:90vh; border:none;'></iframe>",
    height=800,
    scrolling="no",
)


# Gracefully terminate Next server when Streamlit stops

def _cleanup():
    proc = st.session_state.get("next_proc")
    if proc and proc.poll() is None:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()

atexit.register(_cleanup)