import ElectronStore from 'electron-store'

const _electronStore = new ElectronStore()

class StorageService {
  electronStore = _electronStore
  constructor() {}

  set(key: string, value: any) {
    return this.electronStore.set(key, JSON.stringify(value))
  }

  get(key: string) {
    return this.electronStore.get(key)
  }
  delete(key: string) {
    return this.electronStore.delete(key)
  }
}

export default new StorageService()
