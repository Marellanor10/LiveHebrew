// Capa de sincronización futura. v4 usa LocalStore; v5 puede implementar este contrato.
export class SyncAdapter {
  async push(_payload){ throw new Error("SYNC_NOT_CONFIGURED"); }
  async pull(){ throw new Error("SYNC_NOT_CONFIGURED"); }
  async status(){ return {enabled:false,provider:null}; }
}
