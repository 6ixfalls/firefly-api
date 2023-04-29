module.exports = {
    dry: true,
    files: "firefly-iii-spec.yaml",
    from: /\b(Configuration)\b/g,
    to: "FireflyConfiguration"
}