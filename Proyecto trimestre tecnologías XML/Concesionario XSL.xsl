<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
  <xsl:template match="/">
  
<html>
  <head>
	  <title>Proyecto Trimestre: tecnologias XML</title>
	<style type="text/css">
		body {
			width: 900px;
			margin: 0 auto;
		}
	</style>
  </head>
  <body>
    <h2 align="center">Datos de los Concesionarios</h2>
    <table border="1" align="center">
    
      <tr bgcolor="#FFDD00">
        <th>Nombre</th>
        <th>ID</th>
        <th>Direccion</th>
        <th>Codigo Postal</th>
        <th>Telefono</th>
      </tr>
     <xsl:for-each select="concesionarios/concesionario">
        <tr>
          <td><xsl:value-of select="nombre"/></td>
          <td><xsl:value-of select="id"/></td>
          <td><xsl:value-of select="direccion"/></td>
          <td><xsl:value-of select="codigo_postal"/></td>
          <td><xsl:value-of select="telefono"/></td>
        </tr>
</xsl:for-each>
    </table>
    
    <h2 align="center">Datos de los Coches del  Concesionario <xsl:value-of select="concesionarios/concesionario[1]/nombre"/></h2>
    <table border="1" align="center">
      <tr bgcolor="#00FFF0">
        <th>Marca</th>
        <th>Modelo</th>
        <th>Matricula</th>
        <th>Combustible</th>
        <th>Precio</th>
      </tr>
     <xsl:for-each select="concesionarios/concesionario[1]/coches/coche">
        <tr>
          <td><xsl:value-of select="marca"/></td>
          <td><xsl:value-of select="modelo"/></td>
          <td><xsl:value-of select="matricula"/></td>
          <xsl:choose>
          <xsl:when test="combustible = ' Diesel ' ">
            <td bgcolor="red"><xsl:value-of select="combustible"/></td>
          </xsl:when>
          <xsl:when test="combustible=' Gasolina ' ">
            <td bgcolor="blue"><xsl:value-of select="combustible"/></td>
          </xsl:when>
          <xsl:otherwise >
            <td><xsl:value-of select="combustible"/></td>
          </xsl:otherwise>
          </xsl:choose>
          <td><xsl:value-of select="precio"/></td>
        </tr>
</xsl:for-each>
    </table>
    
    <h2 align="center">Datos de los Coches del  Concesionario <xsl:value-of select="concesionarios/concesionario[2]/nombre"/></h2>
    <table border="1" align="center">
      <tr bgcolor="#B111B6">
        <th>Marca</th>
        <th>Modelo</th>
        <th>Matricula</th>
        <th>Combustible</th>
        <th>Precio</th>
      </tr>
     <xsl:for-each select="concesionarios/concesionario[2]/coches/coche">
        <tr>
          <td><xsl:value-of select="marca"/></td>
          <td><xsl:value-of select="modelo"/></td>
          <td><xsl:value-of select="matricula"/></td>
          <xsl:choose>
          <xsl:when test="combustible = ' Diesel ' ">
            <td bgcolor="red"><xsl:value-of select="combustible"/></td>
          </xsl:when>
          <xsl:when test="combustible=' Gasolina ' ">
            <td bgcolor="blue"><xsl:value-of select="combustible"/></td>
          </xsl:when>
          <xsl:otherwise >
            <td><xsl:value-of select="combustible"/></td>
          </xsl:otherwise>
          </xsl:choose>
          <td><xsl:value-of select="precio"/></td>
        </tr>
</xsl:for-each>
    </table>
    <p/>
    <h2 align="center">Descripcion de los coches</h2>
    <xsl:for-each select="concesionarios/concesionario/coches/coche">
    <li> 
    La marca de este coche es un <xsl:value-of select="marca"/>  <xsl:value-of select="modelo"/>, <xsl:value-of select="combustible"/> y la matricula es 
    <xsl:value-of select="matricula"/>. El Precio de este coche es <xsl:value-of select="precio"/>.
    </li>
    </xsl:for-each>
    <p/>
    <h2 align="center">Listado de los coches disponible</h2>
    <xsl:for-each select="concesionarios/concesionario/coches/coche">
    <xsl:sort order="marca"/>
    <li> 
    <xsl:value-of select="marca"/>  <xsl:value-of select="modelo"/>
    </li>
    </xsl:for-each>
    <p/>
  </body>
</html>
  
  </xsl:template>
</xsl:stylesheet>
