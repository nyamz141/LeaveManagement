using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LeaveRequests.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    employeeName = table.Column<string>(type: "TEXT", nullable: true),
                    employeeId = table.Column<string>(type: "TEXT", nullable: true),
                    leaveReason = table.Column<string>(type: "TEXT", nullable: true),
                    daysRequested = table.Column<string>(type: "TEXT", nullable: true),
                    requestStatus = table.Column<string>(type: "TEXT", nullable: true),
                    requestDate = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Requests");
        }
    }
}
