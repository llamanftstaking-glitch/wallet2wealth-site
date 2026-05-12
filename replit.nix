{ pkgs }: {
  deps = [
    pkgs.nodejs_20
    pkgs.nodePackages.pnpm
    pkgs.unzip
    pkgs.curl
    pkgs.bash
  ];
}
