---
title: Authority.
description: 'Manage Authorities to DSA.'
---
> Lending & Borrowing
Auth-v1 connector triggers methods like add, remove. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x6ce3e607c808b4f4c26b7f6adaeb619e49cabb25#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Add

Add an address as account authority

```javascript
spells.add({
  connector: "AUTHORITY-A",
  method: "add",
  args: [authority]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>authority</code></td>
     <td>address</td>
     <td>The authority Address.</td>
   <tr>
</table>

---

### Remove

Remove an address as account authority

```javascript
spells.add({
  connector: "AUTHORITY-A",
  method: "remove",
  args: [authority]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>authority</code></td>
     <td>address</td>
     <td>The authority Address.</td>
   <tr>
</table>