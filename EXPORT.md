# ARM64 Image Export Steps

## Building ARM64 Image
1. Navigate to the API directory:
   ```bash
   cd api
   ```

2. Build and create the ARM64 image using Maven:
   ```bash
   mvn clean package spring-boot:build-image -Parm64 -DskipTests
   ```
   This creates a Docker image: `boostem/api:0.0.1-SNAPSHOT-aarch64`

## Exporting to VPS
3. Save the image to a TAR file:
   ```bash
   docker save -o boostem_api_image.tar boostem/api:0.0.1-SNAPSHOT-aarch64
   ```

4. On the VPS, load the image:
   ```bash
   docker load -i ./boostem_api_image.tar
   ```

5. Run using docker-compose by updating the image name in the command:
   ```bash
   docker-compose up -d
   ```

## Building and Deploying Web Application (boostem-ui)

1. Navigate to the web directory and build the React application:
   ```bash
   cd web
   npm install && npm run build
   ```

2. Create a tar archive of the dist directory:
   ```bash
   tar -czvf boostem_ui_dist.tar.gz -C dist .
   ```
   This archives the contents of dist directory without including the parent directory.


3. On the VPS, extract the archive to update the web application:
   ```bash
   rm -rf ./web/dist/* && mkdir -p ./web/dist
   tar -xzvf boostem_ui_dist.tar.gz -C ./web/dist
   docker compose restart nginx
   ```