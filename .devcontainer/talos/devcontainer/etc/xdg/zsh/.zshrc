## $ZDOTDIR/.zshrc - this file is read only for interactive zsh sessions
## it is read for login and non-login zsh sessions, but only interactive sessions
if [[ ! -o interactive ]]; then
  return
fi

setopt interactivecomments
setopt autocd

if (( $+commands[thefuck] )); then
  source <(thefuck --alias)
  fuck-command-line() {
    local FUCK="$(THEFUCK_REQUIRE_CONFIRMATION=0 thefuck $(fc -ln -1 | tail -n 1) 2> /dev/null)"
    [[ -z $FUCK ]] && echo -n -e "\a" && return
    BUFFER=$FUCK
    zle end-of-line
  }
  zle -N fuck-command-line
  bindkey "\e\e" fuck-command-line
fi

if (( $+commands[less] )); then
  export LESS='-JMQRSi'
  export LESS_TERMCAP_mb=$'\E[1;31m'
  export LESS_TERMCAP_md=$'\E[1;36m'
  export LESS_TERMCAP_me=$'\E[0m'
  export LESS_TERMCAP_so=$'\E[01;44;33m'
  export LESS_TERMCAP_se=$'\E[0m'
  export LESS_TERMCAP_us=$'\E[1;32m'
  export LESS_TERMCAP_ue=$'\E[0m'
fi

if (( $+commands[vivid] )); then
  export LS_COLORS="$(vivid generate one-dark)"
fi

if (( $+commands[eza] )); then
  alias ls='eza --git --no-permissions --classify=auto --octal-permissions --time-style=long-iso --group-directories-first --total-size --group --header --hyperlink --icons'
fi
alias ll='ls -lA'

zstyle ':completion:*' rehash true
zstyle ':completion:*' menu select
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"

zmodload zsh/complist
autoload -Uz compinit
compinit

#### zle functions ####
autoload -Uz copy-earlier-word
zle -N copy-earlier-word

#### keybindings ####
bindkey -e
bindkey '^[[Z' reverse-menu-complete
bindkey "^[," copy-earlier-word

if (( $+commands[bat] )); then
  alias -g -- --help='--help 2>&1 | bat --language=help --style=plain'
  alias cat='bat --style=-numbers,-grid,-header --paging=never'
  export MANPAGER="sh -c 'sed -u -e \"s/\\x1B\[[0-9;]*m//g; s/.\\x08//g\" | bat -p -lman'"
fi

if (( $+commands[uv] )); then
  source <(uv generate-shell-completion zsh)
fi

if (( $+commands[uvx] )); then
  source <(uvx --generate-shell-completion zsh)
fi

if (( $+commands[pkgx] )); then
  eval "$(pkgx dev --shellcode)"
fi

if (( $+commands[atuin] )); then
  source <(atuin init zsh)
fi

if (( $+commands[zoxide] )); then
  eval "$(zoxide init zsh)"
fi

if (( $+commands[fnm] )); then
  source <(fnm env --shell=zsh --use-on-cd --resolve-engines --version-file-strategy=recursive)
  source <(fnm completions --shell=zsh)
fi

if (( $+commands[docker] )); then
  source <(docker completion zsh)
fi

if (( $+commands[starship] )); then
  source <(starship init zsh)
  source <(starship completions zsh)
fi

if (( $+commands[hcloud] )); then
  source <(hcloud completion zsh)
fi

if (( $+commands[hcloud-upload-image] )); then
  source <(hcloud-upload-image completion zsh)
fi

if (( $+commands[kubectl] )); then
  source <(kubectl completion zsh)
fi

if (( $+commands[helm] )); then
  source <(helm completion zsh)
fi

if (( $+commands[k9s] )); then
  source <(k9s completion zsh)
fi

if (( $+commands[talosctl] )); then
  source <(talosctl completion zsh)
fi

if (( $+commands[pulumi] )); then
  source <(pulumi completion zsh)
fi

if (( $+commands[esc] )); then
  source <(esc completion zsh)
fi

if (( $+commands[crd2pulumi] )); then
  source <(crd2pulumi completion zsh)
fi

## note: direnv zsh completion is part of zsh-users/zsh-completions
if (( $+commands[direnv] )); then
  source <(direnv hook zsh)
fi

## TODO: autosuggest, autocomplete, syntax highlight
## note: `zle -N menu-search` and `zle -N recent-paths` before zsh-syntax-highlight
## note: load zsh-autocomplete after zsh-syntax-highlighting
## note: load zsh-autosuggestions before (fast-)syntax-highlighting
