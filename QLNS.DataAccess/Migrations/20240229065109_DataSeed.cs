using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QLNS.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class DataSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "DOB",
                table: "Employees",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 2, 29, 13, 51, 9, 522, DateTimeKind.Local).AddTicks(4964),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 2, 29, 13, 50, 40, 673, DateTimeKind.Local).AddTicks(5175));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "DOB",
                table: "Employees",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 2, 29, 13, 50, 40, 673, DateTimeKind.Local).AddTicks(5175),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 2, 29, 13, 51, 9, 522, DateTimeKind.Local).AddTicks(4964));
        }
    }
}
