﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ObsessionBistro.Migrations
{
    public partial class CreatedMTM_IngredientProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ingredients_Products_ProductId",
                table: "Ingredients");

            migrationBuilder.DropIndex(
                name: "IX_Ingredients_ProductId",
                table: "Ingredients");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "Ingredients");

            migrationBuilder.CreateTable(
                name: "IngredientProduct",
                columns: table => new
                {
                    IngredientsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IngredientProduct", x => new { x.IngredientsId, x.ProductsId });
                    table.ForeignKey(
                        name: "FK_IngredientProduct_Ingredients_IngredientsId",
                        column: x => x.IngredientsId,
                        principalTable: "Ingredients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_IngredientProduct_Products_ProductsId",
                        column: x => x.ProductsId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_IngredientProduct_ProductsId",
                table: "IngredientProduct",
                column: "ProductsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IngredientProduct");

            migrationBuilder.AddColumn<Guid>(
                name: "ProductId",
                table: "Ingredients",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ingredients_ProductId",
                table: "Ingredients",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ingredients_Products_ProductId",
                table: "Ingredients",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
