module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        "<rootDir>/build",
    ],
    reporters: [
        "default",
        ["jest-junit", {
            outputDirectory: "./reports/junit",
            outputName: "junit.xml",
        }]
    ],
}