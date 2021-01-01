package persistence

import (
	"encoding/csv"
	"fmt"
	"github/com/valasek/hw-management/server/graph/model"
	"os"
)

func loadFixtures(stogareFile *os.File, fixturesFilename string) ([]*model.Hw, int) {
	f, err := os.Open(fixturesFilename)
	if err != nil {
		fmt.Println("error opening fixture csv file", err)
		os.Exit(1)
	}
	defer f.Close()

	lines, err := csv.NewReader(f).ReadAll()
	if err != nil {
		fmt.Println("error reading fixture csv file", err)
		os.Exit(1)
	}

	var data []*model.Hw
	for _, line := range lines {
		item := model.Hw{
			ID:              line[0],
			Type:            line[1],
			Manufacturer:    "manufacturer not loaded",
			Series:          "serie not loaded",
			SerialNumber:    "serial not loaded",
			Bought:          "1.2.2021 not loaded",
			WarrantyExpires: "1.2.2023 not loaded",
			User:            &line[2],
			Department:      &line[3],
		}
		data = append(data, &item)
	}
	return data, len(data)
}
