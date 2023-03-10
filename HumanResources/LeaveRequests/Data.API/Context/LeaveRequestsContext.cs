using LeaveRequests.Data.API.Model;
using Microsoft.EntityFrameworkCore;

namespace LeaveRequests.Data.API.Context
{
    public class LeaveRequestsContext: DbContext
    {
        public LeaveRequestsContext(DbContextOptions<LeaveRequestsContext> options): base(options) { 
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseSqlite("Data Source=EmployeeLeave.db");
        }

        public DbSet<SimpleLeaveRequestDto> Requests { get; set; }
    }
}
