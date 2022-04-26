{ pkgs ? import <nixpkgs> }:
with pkgs;
mkShell {
  buildInputs = [ nodePackages.npm
                  yarn
                  yarn2nix
                  usbutils
                  linuxKernel.packages.linux_zen.usbip ];
}
