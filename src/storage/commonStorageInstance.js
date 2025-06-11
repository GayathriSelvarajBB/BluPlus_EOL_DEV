import storage from "localforage";

/**
 * Local Forage instance for storing data
 */
const commonStorageInstance = storage.createInstance({
   name: "COMMON_STORAGE_DATA",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   commonStorageInstance.setDriver(storage.INDEXEDDB);
}

export default commonStorageInstance;
