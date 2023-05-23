usage:

```
echo '{"SecretString":"VAR=VALUE"}' | npx secret-to-env > .env
```

Intent is to use with the output of aws secretsmanager