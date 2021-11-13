FROM python:3.10

WORKDIR /app

COPY requirements.txt /tmp/requirements.txt
RUN pip --disable-pip-version-check install -r /tmp/requirements.txt

COPY . /app

RUN SECRET_KEY=none python manage.py collectstatic --noinput

CMD ["uwsgi", "uwsgi.ini"]
