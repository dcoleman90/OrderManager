using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class SeedInitialData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "OrderProduct",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "OrderName" },
                values: new object[] {"Order 1" });

            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "OrderName" },
                values: new object[] { "Order 2" });

            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "OrderName" },
                values: new object[] { "Order 3" });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] {"ProductName" },
                values: new object[] { "Laptop" });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "ProductName" },
                values: new object[] { "Monitor" });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "ProductName" },
                values: new object[] { "Keyboard" });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "ProductName" },
                values: new object[] { "Power Cable" });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "OrderId",
                table: "OrderProduct",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
