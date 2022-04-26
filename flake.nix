{
  description = "Gastronomous user interface.";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.simpleFlake {
      inherit self nixpkgs;
      name = "gastrui";
      overlay = ./nix/overlay.nix;
      shell = ./nix/shell.nix;
    };
}
