
# Presentation Cutting Room Floor

### Integrating with NPM Workflow

```
{
  "scripts": {
    "build": "rm -rf dist && tsc",
    "prepublish": "typings install && npm run build"
  }
}
```

### Demo - Conflicting Versions of Declaration Files

* What does this look like?
* How to resolve
