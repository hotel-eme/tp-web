FROM python:3.10

WORKDIR /app

COPY etc/python/requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt
