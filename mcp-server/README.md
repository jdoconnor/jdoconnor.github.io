# Jay O'Connor Life MCP Server

An MCP (Model Context Protocol) server that provides access to Jay O'Connor's life information.

## Usage

```bash
cd mcp-server
npm install
npm start
```

## Available Tools

- `get_contact_info` - Contact information (email, calendar, location)
- `get_social_links` - All social/professional profile links
- `get_work_history` - Complete professional work history
- `get_current_projects` - Projects currently working on
- `get_expertise` - Areas of professional expertise
- `get_skills` - Technical and leadership skills
- `schedule_meeting` - Get calendar link to book time
- `send_email` - Get email address for contact

## Available Resources

- `contact://info` - Contact details
- `profile://social` - Social links
- `work://history` - Work history
- `projects://current` - Current projects
- `expertise://areas` - Areas of expertise
- `skills://list` - Skills list

## Claude Desktop Configuration

Add to your Claude Desktop config at `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
	"mcpServers": {
		"jdoconnor-life": {
			"command": "node",
			"args": ["/Users/jay/workspace/jdoconnor.github.io/mcp-server/index.js"]
		}
	}
}
```

Or use npx to run it:

```json
{
	"mcpServers": {
		"jdoconnor-life": {
			"command": "npx",
			"args": [
				"-y",
				"@modelcontextprotocol/sdk",
				"node",
				"/Users/jay/workspace/jdoconnor.github.io/mcp-server/index.js"
			]
		}
	}
}
```

## Data Included

The server includes:

- **Contact**: Email (jaydoconnor@gmail.com), Cal, San Francisco Bay Area
- **Social**: LinkedIn, GitHub, Discord
- **Work History**: SecurityPal, Dogshit AI (Founder), Slack, Quip/Salesforce
- **Current Projects**: SecurityPal Concierge Agents, DogShitAI.com, Rage Calculator
- **Expertise**: Product leadership, Engineering strategy, People & culture
- **Skills**: Team building, Engineering leadership, AI/ML, SvelteKit, TypeScript, and more
