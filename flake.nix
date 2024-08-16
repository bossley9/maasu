{
  description = "dev flake";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    node_nixpkgs.url = "github:nixos/nixpkgs/a343533bccc62400e8a9560423486a3b6c11a23b"; # v20.11.1
  };

  outputs =
    inputs: inputs.flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import inputs.node_nixpkgs { inherit system; };
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs
          pkgs.nodePackages.yarn
          # LSP
          pkgs.prettierd
          pkgs.nodePackages.vscode-langservers-extracted
          pkgs.nodePackages.typescript-language-server
          pkgs.efm-langserver
          # dev server
          pkgs.python3
        ];
        shellHook = ''
          set -o vi
        '';
      };
    });
}
