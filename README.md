Intended usage:

```
aws secretsmanager get-secret-value --secret-id local/my-project --profile development | npx stdin-secret-to-env@latest > .env.local
```

Where the local/my-project secret is a multi-line env file stored as plaintext.

However, it could be used to pull a single top-level value from any JSON string