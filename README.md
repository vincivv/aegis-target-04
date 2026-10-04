# aegis-target-04 · notes API (Express)

Small Express service with notes, a greeting page and a ping check.

Monitored by [AEGIS](https://github.com/vincivv): every push to this repo is scanned autonomously by an AEGIS sentinel agent.

## Run

```bash
npm install && npm start
```

## Routes

- `GET /health`
- `GET /notes`
- `GET /notes/:id`
- `GET /hello?name=`
- `GET /ping?host=`
