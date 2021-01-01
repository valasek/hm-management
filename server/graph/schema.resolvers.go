package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"github/com/valasek/hw-management/server/graph/generated"
	"github/com/valasek/hw-management/server/graph/model"
	"github/com/valasek/hw-management/server/persistence"
)

func (r *mutationResolver) Create(ctx context.Context, input model.HwItem) (*model.Hw, error) {
	panic(fmt.Errorf("not implemented"))
	// hw := &model.Hw{}
	// r.hw = append(r.hw, hw)
	// fmt.Println("create", input)
	// return hw, nil
}

func (r *mutationResolver) Remove(ctx context.Context, input model.HwItem) (*model.Hw, error) {
	panic(fmt.Errorf("not implemented"))
	// hw := &model.Hw{}
	// fmt.Println("remove", input)
	// return hw, nil
}

func (r *queryResolver) GetHw(ctx context.Context) ([]*model.Hw, error) {
	var data []*model.Hw
	if len(r.hw) == 0 {
		data = persistence.InitializeStorage()
		r.hw = data
	}
	fmt.Printf("getHw returned %d records\n", len(r.hw))
	return r.hw, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
