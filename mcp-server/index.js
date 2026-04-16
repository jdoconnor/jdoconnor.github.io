import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as types from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
	{
		name: "jdoconnor-life",
		version: "1.0.0",
	},
	{
		capabilities: {
			resources: {},
			tools: {},
		},
	},
);

const contactInfo = {
	name: "Jay O'Connor",
	title: "Product & Engineering Leader",
	email: "jaydoconnor@gmail.com",
	phone: null,
	location: "San Francisco Bay Area",
	bio: "I help high-velocity companies turn ambiguous problems into durable systems—and ship the work their customers rave about.",
	calendar: "https://www.cal.com/jdoconnor",
};

const socialLinks = {
	linkedin: "https://www.linkedin.com/in/jdoconnor",
	github: "https://www.github.com/jdoconnor",
	discord: "https://discordapp.com/users/257316698728693760",
};

const currentProjects = [
	{
		name: "SecurityPal Concierge Agents",
		url: "https://securitypal.com",
		description:
			"Applied AI rollout pairing concierge agents with human QA for questionnaires and audits.",
		status: "shipping",
		role: "Head of Engineering & Product",
	},
	{
		name: "DogShitAI.com",
		url: "https://dogshitai.com",
		description:
			"Edge-native pet tracking experiences built with SvelteKit, Turso, and Cloudflare.",
		status: "in-flight",
		role: "Founder",
	},
	{
		name: "Rage Calculator",
		url: "https://jayoconnor.com/rage",
		description: "Micro-app translating annual salary + days off into daily payout reality checks.",
		status: "live",
		role: "Creator",
	},
];

const workHistory = [
	{
		dates: "Aug 2023 — Present",
		title: "Head of Engineering & Product",
		company: "SecurityPal",
		description:
			"Establishing the patterns, structure, and norms for distributed engineering while guiding product roadmaps with customers and exec leadership.",
	},
	{
		dates: "Jan 2024 — Present",
		title: "Founder",
		company: "Dogshit AI",
		description: "Building weird and creative applied AI projects",
	},
	{
		dates: "Apr 2023 — Present",
		title: "Engineering Leadership Mentor",
		company: "Freelance",
		description:
			"Coaching eng leaders on people management, process enhancement, and organizational leadership for remote-first companies.",
	},
	{
		dates: "Nov 2021 — Apr 2023",
		title: "Senior Director of Engineering",
		company: "Slack",
		description:
			"Led 20+ engineers and managers shipping channel-based collaboration into sales workflows used by global teams.",
	},
	{
		dates: "Nov 2018 — Nov 2021",
		title: "Senior Director of Engineering",
		company: "Quip (Salesforce)",
		description:
			"Scaled engineering squads integrating Quip's collaborative docs with Salesforce Sales & Service Cloud, improving go-to-market velocity.",
	},
];

const expertise = [
	{
		area: "Product leadership",
		summary: "Clarity, ruthless prioritization, and crisp storytelling that align exec teams.",
		years: 15,
	},
	{
		area: "Engineering strategy",
		summary: "Systems thinking across platform, AI copilots, and dependable delivery.",
		years: 25,
	},
	{
		area: "People & culture",
		summary: "Growing teams that feel psychologically safe, ambitious, and accountable.",
		years: 15,
	},
];

const skills = [
	"Team Building",
	"Engineering Leadership",
	"Product Strategy",
	"Remote Team Management",
	"AI/ML Implementation",
	"System Architecture",
	"Process Design",
	"Executive Communication",
	"Scaling Engineering Teams",
	"SvelteKit",
	"Cloudflare",
	"Turso",
	"TypeScript",
];

server.setRequestHandler(types.ListResourcesRequestSchema, async () => {
	return {
		resources: [
			{
				uri: "contact://info",
				name: "Contact Information",
				description: "Jay O'Connor's contact details",
				mimeType: "application/json",
			},
			{
				uri: "profile://social",
				name: "Social Links",
				description: "Social media and professional profiles",
				mimeType: "application/json",
			},
			{
				uri: "work://history",
				name: "Work History",
				description: "Professional experience timeline",
				mimeType: "application/json",
			},
			{
				uri: "projects://current",
				name: "Current Projects",
				description: "Projects Jay is currently working on",
				mimeType: "application/json",
			},
			{
				uri: "expertise://areas",
				name: "Areas of Expertise",
				description: "Professional areas of focus",
				mimeType: "application/json",
			},
			{
				uri: "skills://list",
				name: "Technical Skills",
				description: "Technical and leadership skills",
				mimeType: "application/json",
			},
		],
	};
});

server.setRequestHandler(types.ReadResourceRequestSchema, async (request) => {
	const uri = request.params.uri;

	let content;
	let mimeType = "application/json";

	switch (uri) {
		case "contact://info":
			content = JSON.stringify(contactInfo, null, 2);
			break;
		case "profile://social":
			content = JSON.stringify(socialLinks, null, 2);
			break;
		case "work://history":
			content = JSON.stringify(workHistory, null, 2);
			break;
		case "projects://current":
			content = JSON.stringify(currentProjects, null, 2);
			break;
		case "expertise://areas":
			content = JSON.stringify(expertise, null, 2);
			break;
		case "skills://list":
			content = JSON.stringify(skills, null, 2);
			break;
		default:
			throw new Error(`Unknown resource: ${uri}`);
	}

	return {
		contents: [
			{
				uri,
				mimeType,
				text: content,
			},
		],
	};
});

server.setRequestHandler(types.ListToolsRequestSchema, async () => {
	return {
		tools: [
			{
				name: "get_contact_info",
				description:
					"Get Jay O'Connor's contact information including email, calendar, and location",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
			{
				name: "get_social_links",
				description: "Get all social and professional profile links",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
			{
				name: "get_work_history",
				description: "Get complete professional work history",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
			{
				name: "get_current_projects",
				description: "Get projects Jay is currently working on",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
			{
				name: "get_expertise",
				description: "Get areas of professional expertise",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
			{
				name: "get_skills",
				description: "Get technical and leadership skills",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
			{
				name: "schedule_meeting",
				description: "Get the calendar link to schedule a meeting with Jay",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
			{
				name: "send_email",
				description: "Get the email address to contact Jay",
				inputSchema: {
					type: "object",
					properties: {},
				},
			},
		],
	};
});

server.setRequestHandler(types.CallToolRequestSchema, async (request) => {
	const toolName = request.params.name;

	switch (toolName) {
		case "get_contact_info":
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(contactInfo, null, 2),
					},
				],
			};
		case "get_social_links":
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(socialLinks, null, 2),
					},
				],
			};
		case "get_work_history":
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(workHistory, null, 2),
					},
				],
			};
		case "get_current_projects":
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(currentProjects, null, 2),
					},
				],
			};
		case "get_expertise":
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(expertise, null, 2),
					},
				],
			};
		case "get_skills":
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(skills, null, 2),
					},
				],
			};
		case "schedule_meeting":
			return {
				content: [
					{
						type: "text",
						text: `Schedule a meeting with Jay: ${contactInfo.calendar}`,
					},
				],
			};
		case "send_email":
			return {
				content: [
					{
						type: "text",
						text: `Email Jay: ${contactInfo.email}`,
					},
				],
			};
		default:
			throw new Error(`Unknown tool: ${toolName}`);
	}
});

async function main() {
	const transport = new StdioServerTransport();
	await server.connect(transport);
	console.error("MCP Server running");
}

main().catch(console.error);
