export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/ads.txt") {
      return new Response(
        "google.com, pub-4264816885816440, DIRECT, f08c47fec0942fa0\n",
        {
          headers: { "content-type": "text/plain" },
        }
      );
    }

    return Response.redirect("https://dayglo.github.io/resume.html", 301);
  },
};