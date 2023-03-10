using AutoMapper;
using LeaveRequests.Data.API.AutoMapper;
using LeaveRequests.Data.API.Context;
using LeaveRequests.Data.API.Databaselayer;
using LeaveRequests.Data.API.UserAccess;
using LeaveRequests.Data.API.UserAccessModules;
using LeaveRequests.Data.API.Utilities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var MyCorsSettings = "_myAllowSpecificOrigins";
// Add services to the container.

//database
builder.Services.AddDbContext<LeaveRequestsContext>(options => {
    options.UseSqlite(builder.Configuration.GetConnectionString("RequestsDatabase"));
});


//auto mapper
var mapperConfig = new MapperConfiguration(config =>
{
    config.AddProfile(new MyMapperProfile());
});
IMapper mapper = mapperConfig.CreateMapper();
builder.Services.AddSingleton(mapper);

//dependency injection
builder.Services.AddScoped<IUserAccessLayer, UserAccessLayer>();
builder.Services.AddScoped<IDatabaseLayer, DatabaseLayer>();
builder.Services.AddScoped<IGlobalUtilities, GlobalUtilities>();

//add cors
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyCorsSettings,
                      builder =>
                      {
                          builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();                         
                      });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyCorsSettings);

app.UseAuthorization();

app.MapControllers();

app.Run();
