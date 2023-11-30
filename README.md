<h1 align="center"> SALTED PEPPER HASHING </h1>

La clase pasada vimos cómo es que se puede aumentar la seguridad de nuestras aplicaciones agregando SALT al hasheo de nuestros datos sensibles. Pero esta medida de seguridad todavía le permite al atacante realizar pruebas de manera offline y así evitar ser baneado por el servidor.

Para NO permitirle que pueda realizar tal cosa, agregamos un segundo componente a nuestros hashs: la **pimienta** o **PEPPER**.

La pimienta es un código único que NO se almacena en la base de datos, sino que se la almacena en algún lugar seguro y se usa una sola para toda la aplicación. De esta forma, el atacante no tiene idea de que existe, por más de que la base de datos haya sido hackeada. La unica forma de que desencripte las credenciales es hackeando simultaneamente la aplicación y así tener acceso a la pimienta.