using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class userAndStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "status",
                table: "Reservations",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "userId",
                table: "Reservations",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_userId",
                table: "Reservations",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_AspNetUsers_userId",
                table: "Reservations",
                column: "userId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_AspNetUsers_userId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_userId",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "status",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "Reservations");
        }
    }
}
