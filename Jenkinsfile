pipeline {
    agent any

    environment {
        NODE_TOOL = 'node-22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/keanovpaginawebyproyectos-maker/HERLIZ-CONFECCIONES.git',
                        credentialsId: 'Ardamins'
                    ]]
                ])
            }
        }

        stage('Setup Node') {
            steps {
                nodejs(env.NODE_TOOL) {
                    bat 'node --version'
                    bat 'npm --version'
                }
            }
        }

        stage('Instalar dependencias') {
            steps {
                nodejs(env.NODE_TOOL) {
                    bat 'npm install'
                }
            }
        }

        stage('Construir proyecto') {
            steps {
                nodejs(env.NODE_TOOL) {
                    bat 'npm run build'
                }
            }
        }

        stage('Verificar build') {
            steps {
                bat '''
                    echo "=== Build completado ==="
                    echo "Verificando carpeta dist..."
                    if exist dist (
                        echo ✅ Dist encontrado
                        dir dist
                    ) else (
                        echo ❌ No se encontró carpeta dist
                        dir
                    )
                '''
            }
        }

        stage('Empaquetar artefacto') {
            steps {
                bat '''
                    echo "=== Empaquetando ==="
                    if exist dist (
                        powershell -Command "Compress-Archive -Path dist\\* -DestinationPath herliz-confecciones.zip -Force"
                        echo ✅ ZIP creado
                    ) else (
                        echo ❌ No hay carpeta dist para empaquetar
                        exit /b 1
                    )
                '''
                archiveArtifacts artifacts: 'herliz-confecciones.zip', fingerprint: true
            }
        }

        stage('Desplegar') {
            when {
                branch 'main'
            }
            steps {
                echo '🚀 Configura aquí tu despliegue'
                // Opción 1: Desplegar en IIS o servidor web
                // bat 'xcopy /E /I dist C:\\inetpub\\wwwroot\\herliz-confecciones\\'
                
                // Opción 2: Desplegar con Docker
                // bat 'docker build -t herliz-confecciones .'
                // bat 'docker run -d -p 80:80 herliz-confecciones'
                
                echo '✅ Despliegue listo para configurar'
            }
        }
    }

    post {
        success {
            echo '✅ Build de HERLIZ-CONFECCIONES completado correctamente.'
        }
        failure {
            echo '❌ El build de HERLIZ-CONFECCIONES falló.'
        }
    }
}