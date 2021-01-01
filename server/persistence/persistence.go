package persistence

import (
	"encoding/gob"
	"fmt"
	"github/com/valasek/hw-management/server/graph/model"
	"os"
)

var file *os.File

// InitializeStorage opens persistent storage or initialize the storage
func InitializeStorage() []*model.Hw {
	const filename = "data.gob"
	storageRecords := 0
	var data []*model.Hw
	f, err := os.Open(filename)
	defer f.Close()
	if err != nil {
		fmt.Println("persistent storage does not exist, creating ...")
		f, err = os.Create(filename)
		if err != nil {
			fmt.Println("error creating a data file", err)
			os.Exit(1)
		}
		data, storageRecords = loadFixtures(f, "./persistence/data.csv")
		dataEncoder := gob.NewEncoder(f)
		err = dataEncoder.Encode(data)
		if err != nil {
			fmt.Println("error writing fixtures to a persistence file", err)
			os.Exit(1)
		}
	} else {
		dataDecoder := gob.NewDecoder(f)
		err = dataDecoder.Decode(&data)
		if err != nil {
			fmt.Println("error reading persistence file", err)
			os.Exit(1)
		}
		storageRecords = len(data)
	}
	fmt.Printf("persistent storage data.gob ready, contains %d records\n", storageRecords)
	return data
}
