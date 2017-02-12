package com.afsinka.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/jsonbasedreverser")
public class JSONBasedReverser {
	private static final Logger logger = LogManager.getLogger(JSONBasedReverser.class);

	@Path("{word}")
	@GET
	@Produces("application/json")
	public Response reverser(@PathParam("word") String word) throws JSONException {

		logger.debug("Given: " + word);

		StringBuilder sb = new StringBuilder();
		sb.append(word);

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("original", sb.toString());
		jsonObject.put("reversed", sb.reverse().toString());

		String result = "" + jsonObject;
		return Response.status(200).entity(result).build();
	}

}