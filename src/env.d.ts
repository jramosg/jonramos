declare namespace App {
  interface Locals {
    lang: string;   
  }
}

interface ImportMetaEnv {
  readonly LOG_DIR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}