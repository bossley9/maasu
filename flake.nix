{
  description = "dev flake";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    node_nixpkgs.url = "github:nixos/nixpkgs/a343533bccc62400e8a9560423486a3b6c11a23b"; # v20.11.1
  };

  outputs =
    inputs: inputs.flake-utils.lib.eachDefaultSystem (system:
    let
      node_pkgs = import inputs.node_nixpkgs { inherit system; };
      pkgs = import inputs.nixpkgs { inherit system; };
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          node_pkgs.nodejs
          node_pkgs.nodePackages.yarn
          # LSP
          pkgs.prettierd
          pkgs.nodePackages.vscode-langservers-extracted
          pkgs.nodePackages.typescript-language-server
          pkgs.efm-langserver
        ];
        shellHook = ''
          set -o vi
        '';
      };
    });
}
