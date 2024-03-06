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
                defaultValue: new DateTime(2024, 3, 6, 13, 26, 47, 693, DateTimeKind.Local).AddTicks(729),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 3, 6, 13, 26, 32, 959, DateTimeKind.Local).AddTicks(2641));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "DOB",
                table: "Employees",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 3, 6, 13, 26, 32, 959, DateTimeKind.Local).AddTicks(2641),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 3, 6, 13, 26, 47, 693, DateTimeKind.Local).AddTicks(729));
        }
    }
}
