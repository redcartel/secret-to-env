usage:

```
echo '{"SecretString":"VAR=VALUE"}' | npx stdin-secret-to-env > .env
```

Intent is to use with the output of aws secretsmanager for env files stored as plaintext.