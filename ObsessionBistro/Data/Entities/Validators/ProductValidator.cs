using FluentValidation;

namespace ObsessionBistro.Data.Entities.Validators
{
    public class ProductValidator : AbstractValidator<Product>
    {
        public ProductValidator()
        {
            RuleFor(p => p.Name).NotEmpty().Length(3, 30);
            RuleFor(p => p.Description).NotEmpty().Length(3, 300);
            RuleFor(p => p.Price).NotEmpty().GreaterThanOrEqualTo(0);
        }

    }
}
