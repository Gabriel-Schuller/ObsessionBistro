using FluentValidation;

namespace ObsessionBistro.Data.Entities.Validators
{
    public class IngredientValidator : AbstractValidator<Ingredient>
    {
        public IngredientValidator()
        {
            RuleFor(i => i.Name).NotEmpty().MaximumLength(40).MinimumLength(3);
        }
    }
}
