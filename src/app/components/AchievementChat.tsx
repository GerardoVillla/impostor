import React, { useState } from 'react';
import { Box, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const AchievementChat: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: 'User', text: input }];
        setMessages(newMessages);
        setInput('');

        // Placeholder for AI response
        const aiResponse = await getAIResponse(input);
        setMessages([...newMessages, { sender: 'AI', text: aiResponse }]);
    };

    const getAIResponse = async (userInput: string): Promise<string> => {
        // Implement API call to your AI service here
        // For now, return a placeholder response
        return `That's impressive! Can you tell me more about "${userInput}"?`;
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 600,
                backgroundColor: '#ffffff',
                borderRadius: 2,
                boxShadow: 3,
                padding: 4,
                marginTop: 4,
                color: '#000',
            }}
        >
            <Typography variant="h5" gutterBottom>
                Talk with AI About Your Achievements
            </Typography>
            <List sx={{ maxHeight: 300, overflow: 'auto', marginBottom: 2 }}>
                {messages.map((msg, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={msg.text}
                            secondary={msg.sender}
                        />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Your Achievement"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <Button variant="contained" color="primary" onClick={handleSend}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default AchievementChat;