using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ObsessionBistro.Migrations
{
    public partial class addressAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Judet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Strada = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Numar = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Bloc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Scara = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Etaj = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Apartament = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Address_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_UserId",
                table: "Address",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Address");
        }
    }
}
