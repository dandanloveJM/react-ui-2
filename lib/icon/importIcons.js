let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('./icon-svg/', true, /\.svg$/))
} catch (error) {
}