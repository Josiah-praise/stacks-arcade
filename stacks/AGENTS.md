# Stacks Documentation Guide for Agents

Use this as your navigation map for all Stacks blockchain docs inside `stacks/`.

## Directory Structure

```
stacks/
├── stacks_essentials/    # START HERE - 75 curated files for developers
├── stacks-shards/        # FALLBACK - 456 complete topic files  
├── stacks-llm.txt        # LAST RESORT - Full 35k line document
└── all_shards_list.txt   # Index of all shard filenames
```

## Navigation Protocol

1) Always start with `stacks_essentials/`  
   - Clarity contracts: `031_clarity.md`, `073_clarity_crash_course.md`, `089_contract_interaction.md`  
   - Tokens (FT/NFT/SFT): `074_create_a_token.md`, `075_fungible_tokens.md`, `076_non_fungible_tokens.md`, `077_semi_fungible_tokens.md`  
   - Testing: `108_unit_testing.md`, `109_integration_testing.md`, `425_testing_clarity_contracts.md`  
   - Frontend: `078_build_a_frontend.md`, `129_connect_wallet.md`, `426_frontend_with_stacksjs.md`  
   - Transactions: `081_sending_transactions.md`, `121_build_transactions.md`, `130_broadcast_transactions.md`

2) If not found, search `stacks-shards/`  
   - sBTC (`034_*`–`061_*`)  
   - Dual Stacking (`062_*`–`069_*`)  
   - Running nodes/miners/signers (`149_*`–`330_*`)  
   - Bitcoin fundamentals (`400_*`–`416_*`)  
   - Clarity reference (functions, keywords, types) (`381_*`–`397_*`)

   Quick filename search examples:
   ```bash
   ls stacks/stacks-shards/ | grep -i "keyword"
   ls stacks/stacks-shards/ | grep -i "sbtc"
   ```

3) Use `all_shards_list.txt` to discover topics before opening files.

4) Only use `stacks-llm.txt` for full-text search across everything.

## Token-Efficient Reading Strategy

1. Read filenames first (or scan `all_shards_list.txt`).  
2. Open only the relevant files.  
3. Use line ranges if a file is large.  
4. Handle one topic at a time.  
5. Remember what you read to avoid reloading.

## Quick Reference: Where to Look

| Need Info About | First Look | Then Try |
|-----------------|------------|----------|
| Clarity syntax/functions | `stacks_essentials/031_*`, `073_*` | `stacks-shards/381_*`–`383_*` |
| Creating tokens | `stacks_essentials/074_*`–`077_*` | - |
| Frontend/Stacks.js | `stacks_essentials/078_*`, `114_*`–`133_*` | - |
| Testing contracts | `stacks_essentials/108_*`, `109_*` | `stacks-shards/425_*` |
| sBTC | `stacks-shards/034_*`–`061_*` | - |
| PoX/Stacking | `stacks-shards/027_*`, `323_*`–`331_*` | - |
| Bitcoin basics | `stacks-shards/400_*`–`416_*` | - |
| Node/Signer setup | `stacks-shards/149_*`–`330_*` | - |
| SIPs/Proposals | `stacks-shards/019_*`, `020_*` | - |

## File Naming Convention

Files follow `NNN_topic_name.md`:

- Numbers follow the original doc order.
- Names are sanitized (lowercase, underscores).
- Number ranges indicate related sections—read in order when possible.
