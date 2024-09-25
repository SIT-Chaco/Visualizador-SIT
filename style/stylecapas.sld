<StyledLayerDescriptor version="1.0.0" 
    xmlns="http://www.opengis.net/sld" 
    xmlns:ogc="http://www.opengis.net/ogc" 
    xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <NamedLayer>
        <Name>PARCELARIO_URBANO_2021</Name>
        <UserStyle>
            <Title>Estilo de Parcelario Urbano 2021</Title>
            <FeatureTypeStyle>
                <Rule>
                    <PolygonSymbolizer>
                        <Fill>
                            <CssParameter name="fill">rgba(0, 0, 0, 0)</CssParameter> <!-- Color de relleno -->
                        </Fill>
                        <Stroke>
                            <CssParameter name="stroke">#bbbbbb</CssParameter> <!-- Color del borde -->
                            <CssParameter name="stroke-width">0.5</CssParameter> <!-- Grosor del borde -->
                        </Stroke>
                    </PolygonSymbolizer>
                </Rule>
            </FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
</StyledLayerDescriptor>