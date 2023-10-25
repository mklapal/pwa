import { DATA_TYPE, Connection } from "jsstore";
import workerInjector from "jsstore/dist/worker_injector";
export const idbCon = new Connection();
idbCon.addPlugin(workerInjector);
export const dbname = "pwa";

const getDatabase = () => {
  const tblPost = {
    name: "Posts",
    columns: {
      uid: {
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        notNull: true,
        dataType: DATA_TYPE.Number,
      },
      userId: {
        notNull: true,
        dataType: DATA_TYPE.Number,
      },
      title: {
        dataType: DATA_TYPE.String,
      },
      body: {
        dataType: DATA_TYPE.String,
      },
    },
  };
  const dataBase = {
    name: dbname,
    tables: [tblPost],
  };
  return dataBase;
};

export const initJsStore = () => {
  try {
    const dataBase = getDatabase();
    idbCon.initDb(dataBase);
  } catch (ex) {
    console.error(ex);
  }
};
