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
                    echo "Verificando carpeta build..."
                    if exist build (
                        echo ✅ Build encontrado
                        dir build
                    ) else (
                        echo ❌ No se encontró carpeta build
                        dir
                    )
                '''
            }
        }

        stage('Empaquetar artefacto') {
            steps {
                bat '''
                    echo "=== Empaquetando ==="
                    if exist build (
                        powershell -Command "Compress-Archive -Path build\\* -DestinationPath herliz-confecciones.zip -Force"
                        echo ✅ ZIP creado desde build
                    ) else (
                        echo ❌ No hay carpeta build para empaquetar
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
                // Para desplegar en IIS:
                // bat 'xcopy /E /I build C:\\inetpub\\wwwroot\\herliz-confecciones\\'
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