//go:generate go run github.com/99designs/gqlgen

// Package graph ...
package graph

import "github/com/valasek/hw-management/server/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

// Resolver ...
type Resolver struct{
	hw []*model.Hw
}
