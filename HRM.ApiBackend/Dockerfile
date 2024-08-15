#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["HRMApiBackend/HRMApiBackend.csproj", "HRMApiBackend/"]
COPY ["HRM.Services/HRM.Services.csproj", "HRM.Services/"]
COPY ["HRM.DataAccess/HRM.DataAccess.csproj", "HRM.DataAccess/"]
COPY ["HRM.Entity/HRM.Entity.csproj", "HRM.Entity/"]
COPY ["HRM.ViewModel/HRM.ViewModel.csproj", "HRM.ViewModel/"]
RUN dotnet restore "./HRMApiBackend/./HRMApiBackend.csproj"
COPY . .
WORKDIR "/src/HRMApiBackend"
RUN dotnet build "./HRMApiBackend.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./HRMApiBackend.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HRMApiBackend.dll"]